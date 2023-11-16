import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	// A1,A2,...AN인 N개의 자연수
	// 최소 1개 이상의 수를 선택해 그 합이 K가 되는 경우의 수 구하기!
	// 첫줄 = 2개의 자연수 N, K
	// 2줄 = N개의 자연수 수열 A
	static int N, K;
	static int[] arr;
	static int cnt;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken()); // 자연수 개수
			K = Integer.parseInt(st.nextToken()); // 합
			
			arr = new int[N];
			// 배열에 입력
			st = new StringTokenizer(br.readLine());
			for(int i=0;i<N;i++) {
				arr[i] = Integer.parseInt(st.nextToken());
			}
			cnt = 0;
			DFS(0,0);
			sb.append("#"+tc+" "+cnt+"\n");
		}
		System.out.print(sb);
	}
	public static void DFS(int index, int sum) {
		if(index == N) {
			if(sum == K) {
				cnt++;
			}
			return;
		}
		DFS(index + 1, sum + arr[index]); // 원소를 선택했을 때
		DFS(index + 1, sum); // 원소를 선택하지 않았을 때
	}
}
