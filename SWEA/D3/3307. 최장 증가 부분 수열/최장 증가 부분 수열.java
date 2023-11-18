import java.io.*;
import java.util.*;
import java.math.*;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			int N = Integer.parseInt(br.readLine());
			int[] arr = new int[N];
			int[] dp = new int[N];
			int max = 1;
			st = new StringTokenizer(br.readLine());
			for(int i=0;i<N;i++) {
				arr[i] = Integer.parseInt(st.nextToken());
			}
			for(int i=0;i<N;i++) {
				dp[i] = 1;
				for(int j=0;j<i;j++) {
					if(arr[i] > arr[j] && dp[i] <= dp[j]) {
						dp[i] = dp[j] + 1;
					}
					max = Math.max(max, dp[i]);
				}
			}
			sb.append("#"+tc+" "+max+"\n");
		}
		System.out.print(sb);
	}
}
