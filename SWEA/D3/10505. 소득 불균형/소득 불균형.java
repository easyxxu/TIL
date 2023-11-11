import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
    public static void main(String[] args) throws IOException {
    	//System.setIn(new FileInputStream("src/swea/input.txt"));
    	BufferedReader bw = new BufferedReader(new InputStreamReader(System.in));
    	StringTokenizer st;
    	StringBuilder sb = new StringBuilder();
    	
    	int T = Integer.parseInt(bw.readLine());
    	for(int tc=1;tc<=T;tc++) {
    		int N = Integer.parseInt(bw.readLine());
    		st = new StringTokenizer(bw.readLine());    		
    		int[] arr = new int[N];
    		int cnt =0;
    		int sum = 0;
    		
    		for(int i=0;i<N;i++) {
    			int p = Integer.parseInt(st.nextToken());
    			arr[i] = p;
    			sum += p;
    		}
    		
    		sum /= N;
    		
    		for(int i=0;i<N;i++) {
    			if(sum >= arr[i])
    				cnt++;
    		}
    		
    		sb.append("#"+tc+" "+cnt+"\n");
    	}
    	System.out.print(sb);
    }
}
